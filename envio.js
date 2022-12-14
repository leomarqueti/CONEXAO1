// Na primeira página, crie um canal de broadcast e envie uma mensagem
const broadcastChannel = new BroadcastChannel('canalleo');
broadcastChannel.postMessage('deu certo porra');
