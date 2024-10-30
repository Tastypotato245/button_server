const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    // 클라이언트로부터 메시지 받기
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    // 에러 처리
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });

    // 연결 종료 처리
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is listening on ws://localhost:8080');
