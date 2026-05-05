from http.server import SimpleHTTPRequestHandler, HTTPServer

HOST = "77.68.32.217"   
PORT = 8080       

server = HTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
print(f"Server running on port {PORT}")

server.serve_forever()
