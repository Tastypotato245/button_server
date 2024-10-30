const net = require('net');

const server = net.createServer((socket) => {
    console.log('TCP Client connected');

    // 클라이언트로부터 데이터 수신
    socket.on('data', (data) => {
        console.log('Received from TCP client:', data.toString());
    });

    // 에러 처리
    socket.on('error', (error) => {
        console.error('TCP Error:', error);
    });

    // 연결 종료 처리
    socket.on('close', () => {
        console.log('TCP Client disconnected');
    });
});

server.listen(8081, () => {
    console.log('TCP server is listening on port 8081');
});
