export function signinMessage(name: string, token: string, code: string): object {
  switch (code) {
    case 'pl':
      return {
        subject: `Cześć ${name}, jedź z VIKING GARAGE`,
        text:
`Cześć ${name}!

Witaj w VIKING GARAGE!
Właśnie dołączyłeś do platformy łączącej motocyklistów na całym świecie.
Cieszymy się, że będziesz jeździł(a) z nami! Zanim wejdziesz do naszego Garażu,
kliknij w link poniżej. Chcemy tylko sprawdzić czy jesteś prawdziwym motocyklistą, a nie robotem:

http://www.vikinggarage.com/verify/${token}

Możesz również skopiować i wkleić link do swojej przeglądarki.
Dzięki za dołączenie do nas! Do zobaczenia na trasie!

Zespół VIKING GARAGE
`,
      }
    default:
      return {
        subject: `Hi, ${name}, ride with VIKING GARAGE`,
        text:
`Hello, ${name}!

Welcome to VIKING GARAGE!
You have just joined a platform connecting motorcycles riders worldwide.
We’re glad you want to ride with us! Before you start exploring our Garage,
please click link below, to confirm that you are a real rider and not an evil robot:

http://www.vikinggarage.com/verify/${token}

You can also copy and paste this link into your web browser.
Thanks again for joining. See you ridin' round!

VIKING GARAGE Team
`,
      }
  }
}

export function resetMessage(name: string, token: string, code: string): object {
 switch (code) {
    case 'pl':
      return {
        subject: `VIKING GARAGE Reset Hasła`,
        text:
`Cześć ${name}!

Otrzymaliśmy prośbę o zmianę hasła dla Twojego konta na platformie Viking Garage.
Jeśli to nie Ty to zrobiłeś(aś), możesz zignorować tę wiadomość e-mail.
Jeśli Ty to zrobiłeś(aś), możesz zmienić swoje hasło klikając w link poniżej.

http://www.vikinggarage.com/change/${token}

Możesz również skopiować i wkleić link do swojej przeglądarki.
Pozdrowienia z naszego Garażu!

Zespół VIKING GARAGE
`,
      }
    default:
      return {
        subject: `VIKING GARAGE Reset Password`,
        text:
`Hi, ${name}!

We received a request to change the password for your Viking Garage account.
If you did not make this request, just ignore this email.
Otherwise, please click the link below to change your password:

http://www.vikinggarage.com/change/${token}

You can also copy and paste this link into your web browser.
Greetings from our VIKING GARAGE!

VIKING GARAGE Team
`,
      }
  }
}
