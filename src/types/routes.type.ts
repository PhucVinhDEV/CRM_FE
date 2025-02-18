export interface RouteType {
  path: string;
  component: React.FC;
  exact?: boolean;
  protected?: boolean; // Route có yêu cầu đăng nhập không?
}
