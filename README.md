#### Oggi creerai un sito di notizie: **Spaceflight**, usando TypeScript.

Soddisfa le richieste e cerca di implementare i tipi e le interfacce al meglio che puoi.

### 📃 API Docs:

Puoi trovare l’intera documentazione qui –> [LINK](https://api.spaceflightnewsapi.net/v4/documentation/)

L’endpoint per ottenere la lista di articoli sarà così:

```
https://api.spaceflightnewsapi.net/v4/articles
```

Usa la proprietà `id` di ogni rotta per cui vuoi ricevere informazioni

```
https://api.spaceflightnewsapi.net/v4/articles/:id
```

### TASKS:

- Implementa una bella pagina principale per visualizzare gli articoli delle API; ogni articolo dovrà essere visualizzato da un componente e dovrà mostrare i dettagli come titolo, data di pubblicazione, immagine di copertina ecc…
- Cliccare su un articolo dovrebbe portare l’utente alla pagina dettaglio, in cui verrà fatto il fetch dei dati di un particolare articolo. Mostra in questa pagina ogni informazione che puoi ottenere al riguardo.

Suggerimenti:

- Come al solito separa l’applicazione in componenti riutilizzabili
- Implementa interfacce per prop e stato per ogni componente, quando necessario
- Implementa un’interfaccia solo per il risultato della chiamata API
- Salta l’approccio Redux e fai il fetch diretto dei dati nel componente e salva il risultato nello stato locale
