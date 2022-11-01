export const ServerAddress = "https://remotepad-service.onrender.com/";

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
