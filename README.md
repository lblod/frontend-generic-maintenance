# generic-maintenance-page

WIP

```
maintenance:
  image: lblod/generic-maintenance-page:0.1.0
  environment:
     MAINTENANCE_MESSAGE: "Het OrganisatiePortaal is momenteel niet beschikbaar wegens technisch onderhoud."
     MAINTENANCE_APP_TITLE: "OrganisatiePortaal"
     MAINTENANCE_APP_URL: "organisaties.abb.vlaanderen.be"
  labels:
     - "logging=true"
  networks:
     - proxy
     - default
```
