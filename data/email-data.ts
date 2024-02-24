export interface infoData {
    name: string;
    from: string;
    recipient: string;
    subject: string;
    message: string;
}

type members = { [key: string]: string };
type memberEmails = { [key: string]: string };

export const members: members = {
    rohan: "Rohan Kunchala",
    alan: "Alan Cortez",
    cesar: "Cesar Rojas",
    michael: "Michael Chhun",
}

export const memberEmailsKey: memberEmails = {
    rohan: "rohan@bagget.io",
    alan: "alan@bagget.io",
    cesar: "cesar@bagget.io",
    michael: "michael@bagget.io",
}

export const memberOptions = Object.keys(members)
export const memberEmails = Object.values(memberEmailsKey)

export const xssRegex = /[<>&\\]/

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/