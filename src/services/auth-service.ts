export interface UserProfile {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  targetUniversity: string;
  targetScore: number;
  hasCompletedFullExam: boolean;
  certificateId?: string;
  createdAt: string;
}

const USERS_STORAGE_KEY = 'sangsang_users_db';
const CURRENT_USER_KEY = 'sangsang_current_user';

// Seed demo database users
const SEED_USERS: Array<UserProfile & { passwordHash: string }> = [
  {
    id: 'usr-01',
    fullname: 'Nguyễn Văn Minh',
    email: 'hocsinh@sangsang.edu.vn',
    phone: '0908123456',
    passwordHash: '123',
    targetUniversity: 'ĐH Bách Khoa TP.HCM',
    targetScore: 850,
    hasCompletedFullExam: true,
    certificateId: 'SS-VACT-2026-9821',
    createdAt: '2026-07-01'
  },
  {
    id: 'usr-02',
    fullname: 'Trần Thị Mỹ Linh',
    email: 'linh.tran@gmail.com',
    phone: '0912345678',
    passwordHash: '123456',
    targetUniversity: 'ĐH Kinh Tế TP.HCM (UEH)',
    targetScore: 780,
    hasCompletedFullExam: false,
    createdAt: '2026-07-15'
  }
];

export class AuthService {
  // Initialize Database in localStorage
  private static getUsers(): Array<UserProfile & { passwordHash: string }> {
    try {
      const data = localStorage.getItem(USERS_STORAGE_KEY);
      if (!data) {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(SEED_USERS));
        return SEED_USERS;
      }
      return JSON.parse(data);
    } catch {
      return SEED_USERS;
    }
  }

  private static saveUsers(users: Array<UserProfile & { passwordHash: string }>): void {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }

  // Get Current Logged-In User
  public static getCurrentUser(): UserProfile | null {
    try {
      const userStr = localStorage.getItem(CURRENT_USER_KEY);
      if (!userStr) return null;
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  // Register New User Account
  public static register(payload: {
    fullname: string;
    email: string;
    phone: string;
    password: string;
    targetUniversity?: string;
    targetScore?: number;
  }): { success: boolean; message: string; user?: UserProfile } {
    const users = this.getUsers();
    
    // Check duplicate email
    const existing = users.find(u => u.email.toLowerCase() === payload.email.toLowerCase());
    if (existing) {
      return { success: false, message: 'Email này đã được đăng ký tài khoản trên hệ thống Sangsang!' };
    }

    const newUser: UserProfile & { passwordHash: string } = {
      id: `usr-${Date.now()}`,
      fullname: payload.fullname,
      email: payload.email,
      phone: payload.phone || '',
      passwordHash: payload.password,
      targetUniversity: payload.targetUniversity || 'ĐH Quốc Gia TP.HCM',
      targetScore: payload.targetScore || 750,
      hasCompletedFullExam: false,
      createdAt: new Date().toISOString().split('T')[0]
    };

    users.push(newUser);
    this.saveUsers(users);

    // Auto Login after registration
    const { passwordHash, ...profile } = newUser;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(profile));

    return {
      success: true,
      message: 'Đăng ký tài khoản thành công! Lộ trình cá nhân hóa đã được kích hoạt.',
      user: profile
    };
  }

  // Login Existing User Account
  public static login(email: string, password: string): { success: boolean; message: string; user?: UserProfile } {
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() || u.phone === email);

    if (!user) {
      return { success: false, message: 'Tài khoản không tồn tại. Vui lòng kiểm tra lại email hoặc số điện thoại!' };
    }

    if (user.passwordHash !== password) {
      return { success: false, message: 'Mật khẩu không chính xác. Mẹo dùng tài khoản demo: hocsinh@sangsang.edu.vn / 123' };
    }

    const { passwordHash, ...profile } = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(profile));

    return {
      success: true,
      message: `Chào mừng ${profile.fullname} quay trở lại!`,
      user: profile
    };
  }

  // Logout
  public static logout(): void {
    localStorage.removeItem(CURRENT_USER_KEY);
  }

  // Mark 120-question mock exam completed to unlock certificate
  public static markFullExamCompleted(userId: string): UserProfile | null {
    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === userId);
    if (idx !== -1) {
      users[idx].hasCompletedFullExam = true;
      users[idx].certificateId = `SS-VACT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      this.saveUsers(users);

      const { passwordHash, ...profile } = users[idx];
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(profile));
      return profile;
    }
    return null;
  }
}
