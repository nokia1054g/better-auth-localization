import type { ErrorCodesType } from "../types";

export const FI_FI = {
	// User related errors
	USER_NOT_FOUND: "Käyttäjää ei löytynyt",
	FAILED_TO_CREATE_USER: "Käyttäjän luominen epäonnistui",
	FAILED_TO_UPDATE_USER: "Käyttäjän päivittäminen epäonnistui",
	USER_ALREADY_EXISTS: "Käyttäjä on jo olemassa",
	USER_EMAIL_NOT_FOUND: "Käyttäjän sähköpostiosoitetta ei löytynyt",
	USER_ALREADY_HAS_PASSWORD:
		"Käyttäjällä on jo salasana. Syötä se poistaaksesi tilin.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Istunnon luominen epäonnistui",
	FAILED_TO_GET_SESSION: "Istunnon noutaminen epäonnistui",
	SESSION_EXPIRED:
		"Istunto on vanhentunut. Kirjaudu sisään uudelleen suorittaaksesi tämän toiminnon.",

	// Authentication errors
	INVALID_PASSWORD: "Virheellinen salasana",
	INVALID_EMAIL: "Virheellinen sähköpostiosoite",
	INVALID_EMAIL_OR_PASSWORD: "Virheellinen sähköpostiosoite tai salasana",
	INVALID_TOKEN: "Virheellinen token",
	EMAIL_NOT_VERIFIED: "Sähköpostiosoitetta ei ole vahvistettu",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Tiliä ei löytynyt",

	// Password related errors
	PASSWORD_TOO_SHORT: "Salasana on liian lyhyt",
	PASSWORD_TOO_LONG: "Salasana on liian pitkä",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Tili on jo yhdistetty",
	PROVIDER_NOT_FOUND: "Palveluntarjoajaa ei löytynyt",
	ID_TOKEN_NOT_SUPPORTED: "id_token ei ole tuettu",
	FAILED_TO_GET_USER_INFO:
		"Käyttäjätietojen noutaminen epäonnistui",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Sähköpostiosoitetta ei voitu päivittää",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Viimeisintä tiliä ei voitu poistaa",
	ACCOUNT_NOT_FOUND: "Tiliä ei löytynyt",
} satisfies ErrorCodesType;

export const LOCALES = {
    "fi-FI": FI_FI,
} as const;
