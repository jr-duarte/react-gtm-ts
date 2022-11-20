declare const ReactTagManager: {
    init: (GTMCode: string) => void;
    action: ({ event, ...more }: {
        [key: string]: string;
        event: string;
    }) => void;
};

export { ReactTagManager };
