export class imgUrls {
    textPara: string;
    url: string;
}

export class UserMetadata {
    IsAvanadeUser: boolean;
    EthicMessages: EthicMessage[];
    DeadlineDayNbr: number;
}

export class EthicMessage {
    MessageTitle: string;
    MessageBody: string;
    MessageBottom: string;
}