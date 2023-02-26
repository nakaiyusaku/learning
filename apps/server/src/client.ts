import http from "http";

http.get("http://localhost:12345/user/abCDef1234", (res) => {
  let data = "";
  res.setEncoding("utf8");

  res.on("data", (chunk: any) => (data += chunk));
  res.on("end", () => console.log(data));
});
