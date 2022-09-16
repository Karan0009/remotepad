export const ServerAddress = "http://localhost:8000/";

export const EndPoints = {
  getContent: "api/content",
  postContent: "api/content",
  // postContent: "api/content",
  // postContent: "test",
};

export function GetEndpoint(endpointName) {
  const endpoint = EndPoints[endpointName];
  if (endpoint !== undefined || endpoint !== null) {
    return ServerAddress + endpoint;
  }
}
