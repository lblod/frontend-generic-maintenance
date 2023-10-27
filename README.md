# frontend-generic-maintenance

frontend for the generic maintenance stack. see https://github.com/lblod/app-generic-maintenance

```
frontend:
  image: lblod/frontend-generic-maintenance
  environment:
     MAINTENANCE_MESSAGE: "Het OrganisatiePortaal is momenteel niet beschikbaar wegens technisch onderhoud."
     MAINTENANCE_APP_TITLE: "OrganisatiePortaal"
     MAINTENANCE_APP_URL: "organisaties.abb.vlaanderen.be"

```
