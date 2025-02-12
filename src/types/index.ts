export interface IBasePageProps {
  children?: React.ReactNode;
  params: {
    lng: string;
  };
}
export interface IBaseReponse<T> {
  status: number; // Trạng thái trả về từ API (ví dụ: 1000 = thành công)
  hasErrors: boolean; // Xác định phản hồi có lỗi hay không
  result: T;
}
export interface IBaseResponseError {
  status: number; // Mã trạng thái HTTP (ví dụ: 500, 400, 401)
  hasErrors: boolean; // Xác định phản hồi này là lỗi
  errors: string[]; // Danh sách thông báo lỗi
  timestamp: string; // Thời gian xảy ra lỗi
}
