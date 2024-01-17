export type StatusResponseOk<Data> = {
  status: string,
  data: Data,
};

export type StatusResponseError = {
  status: string,
  data: { message: string }
};

export type StatusResponse<Data> = StatusResponseError | StatusResponseOk<Data>;