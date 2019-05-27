interface ErrorResponse {
  message?: string;
  stack?: any;
}
export class RepositoryResponse<T> {
  status = 200;
  error?: ErrorResponse;
  data: T;
}