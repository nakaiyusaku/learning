$input = Read-Host "Please Type Hiragana"

try {
  $result = Invoke-WebRequest http://localhost:12345/hiragana/$input
  echo $result.Content
}
catch {
  $stream = $_.Exception.Response.GetResponseStream()
  $stream.Position = 0
  $reader = [System.IO.StreamReader]::new($stream)
  echo $reader.ReadToEnd()
}
