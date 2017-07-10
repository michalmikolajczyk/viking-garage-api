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
      };
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
      };
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
      };
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
      };
  }
}

export function contactRequest(name: string, email: string, type: string, message: string, body: string): object {
  return {
    subject: `[${type}] contact request from ${name}, ${email}`,
    text:
`TYPE: ${type},
Name: ${name},
Email: ${email},
---
Message from user: ${message || 'no message'}
---
${body || ''}`,
  };
}

export function rideMessage(name: string, code: string): object {
 switch (code) {
    case 'pl':
      return {
        subject: `Jazda z VIKING GARAGE`,
        text:
`Cześć ${name}!

Właśnie dokonałeś wstępnej rezerwacji jazdy poprzez platformę VIKING GARAGE. Nasz zespół skontaktuje się z Tobą w ciągu 24h.

W międzyczasie skontaktujemy się z właścicielem motocykla i potwierdzimy dostępność maszyny we wskazanych przez Ciebie terminie.
Jeżeli nie chcesz tyle czekać możesz śmiało skontaktować się z nami pod numerem (+48) 667 772 402.

Zespół VIKING GARAGE
`,
      };
    default:
      return {
        subject: `Ride with VIKING GARAGE`,
        text:
`Hi, ${name}!

You have made a pre-booking reservation via the VIKING GARAGE platform. Our team will contact you within 24 hours.

In the meantime, we will contact the owner of the motorcycle to confirm the availability of the machine you choosed.
If you do not want to wait so long, feel free to contact us at (+48) 667 772 402.

VIKING GARAGE Team
`,
      };
  }
}

export function contactMessage(name: string, code: string): object {
 switch (code) {
    case 'pl':
      return {
        subject: `Kontakt z VIKING GARAGE`,
        text:
`Cześć ${name}!

Cieszymy się, że chcesz dołączyć do naszej zaufanej motospołeczności. To dopiero początek, dlatego z każdym kontaktujemy się indywidualnie. Nasz zespół odezwie się do Ciebie w ciągu 24 godzin i opowie o możliwościach otwierającymi się przed osobami, które dołączają do VIKING GARAGE.

Jeżeli nie chcesz tyle czekać możesz śmiało skontaktować się z nami pod numerem (+48) 667 772 402.

Do usłyszenia!
Zespół VIKING GARAGE
`,
      };
    default:
      return {
        subject: `Contact with VIKING GARAGE`,
        text:
`Hi, ${name}!

We are glad that you want to join our trusted motocommunity. Since we are on early stage, we contact everyone individually. Our team will respond to you within 24 hours and tell you about the possibilities for people who join VIKING GARAGE.

If you do not want to wait so long, feel free to contact us at (+48) 667 772 402.

See you!
VIKING GARAGE TEAM
`,
      };
  }
}
