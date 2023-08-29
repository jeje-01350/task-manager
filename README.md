# TaskManager

## Versions :

Nodejs : v18.17.1
NPM : v9.6.7
Angular CLI : v16.2.0
yarn : v1.22.19
compodoc : v1.1.21

## Commandes et Réponses :

- Installer angular : `npm install -g @angular/cli`
- Créer un nouveau projet Angular : `ng new task-manager`
- Lancer application : `ng build` puis `ng serve`
- Le fichier dist se créer automatiquement lors du build de l'application

## Imaginons que les données délivrées par les services soient issues de requêtes HTTP. Décrivez les opérations à effectuer pour mettre en place le module HttpClient ainsi que la requête à effectuer sur une url "https://domain/data" avec un paramètre de requête "?param=test".

- Importer le module HttpClientModule dans le fichier app.module.ts
- Injecter le service HttpClient dans le constructeur du service
- Utiliser la méthode suivante :
-  getTasksWithParameter(paramValue: string): Observable<Task[]> {
   const url = `https://domain/data?param=${paramValue}`;
   return this.http.get<Task[]>(url);
   }
- Dans le composant, appeler la méthode du service en lui passant le paramètre voulu
- ngOnInit(): void {
  const paramValue = 'test';
  this.taskHttpService.getTasksWithParameter(paramValue).subscribe(tasks => {
  this.tasks = tasks;
  });
  }
- Dans le template, afficher les données récupérées
