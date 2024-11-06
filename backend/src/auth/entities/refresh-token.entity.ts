export class RefreshToken {
  id: string;
  userId: string;
  email: string;
  refreshToken: string;
  createdAt: Date;
  expiresAt: Date;
  revoked: boolean;
  ipAddress: string;
  userAgent: string;

  constructor(props: Partial<RefreshToken>) {
    Object.assign(this, props);
  }
}
