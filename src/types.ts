export enum Weekday {
    Monday = "Maanantai",
    Tuesday = "Tiistai",
    Wednesday = "Keskiviikko",
    Thursday = "Torstai",
    Friday = "Perjantai",
    Saturday = "Lauantai",
    Sunday = "Sunnuntai"
}

export type ChangeOpenStatus = {
    type: 'open' | 'close',
    value: string | number
} | undefined

export type DateInfo = {
    day: Weekday,
    value: ChangeOpenStatus[]
}

export type DisplayInfo = {
    day: Weekday,
    openingHours: string
}