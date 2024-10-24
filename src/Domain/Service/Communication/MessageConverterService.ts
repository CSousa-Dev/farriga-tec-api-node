type message = {
    type: messageType,
    payload: any
}

type internalEvent = {
    type: internalEventType,
    payload: any
}

type messageType = 'new-measurement' | 'teste-2';
type internalEventType = 'new-measurement' | 'teste-2';

const messageToInternalEventMapper: Record<messageType, internalEventType> = {
    'new-measurement': 'new-measurement',
    'teste-2': 'teste-2'
}
