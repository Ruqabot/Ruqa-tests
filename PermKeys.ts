const permKeys = (key: string) => {
    switch (key) {
        case "createInstantInvite": return "Create Instant Invite";
        case "kickMembers": return "Kick Members";
        case "banMembers": return "Ban Members";
        case "admistrator": return "Administrator";
        case "manageChannels": return "Manage Channels";
        case "manageGuild": return "Manage Guild";
        case "addReactions": return "Add Reactions";
        case "sendMessages": return "Send Messages";
        case "attachFiles": return "Attach Files";
        case "readMessageHistory": return "Read Message History";
        case "useExternalEmojis": return "Use External Emojis";
        case "voiceSpeak": return "Voice Speak";
        case "voiceConnect": return "Voice Connect";
        case "voiceMuteMembers": return "Voice Deafen Members";
        case "voiceDeafenMembers": return "Voice Deafen Members";
        case "manageNicknames": return "Manage Nicknames";
        case "manageRoles": return "Manage Roles";
        case "manageWebhooks": return "Manage Webhooks";
        case "manageEmojisAndStickers": return "Manage Emojis & Stickers";
        case "voiceRequestToSpeak": return "Voice RequestToSpeak";
        case "manageThreads": return "Manage Threads";
        case "createPublicThreads": return "Create Public Threads";
        case "createPrivateThreads": return "Create Private Threads";
        case "useExternalStickers": return "Use External Stickers";
        case "sendMessagesInThreads": return "Send MessagesInThreads";
        case "moderateMembers": return "Moderate Members";
        default: throw new Error("Unreferenced permission key");
    }
};

export default permKeys;
