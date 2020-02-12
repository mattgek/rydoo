# CREATING SQUAD APPS
ng g @nrwl/angular:application expense --style=scss --routing
ng g @nrwl/angular:application flight --style=scss --routing
ng g @nrwl/angular:application identity --style=scss --routing
ng g @nrwl/angular:application payment-methods --style=scss --routing
ng g @nrwl/angular:application hotel --style=scss --routing

# CREATING UI LIBRARY
ng g @nrwl/angular:lib --directory=libs ui-compass
ng g @nrwl/angular:component --project=ui-compass --export

# CREATING CORE LIBRARY
mkdir libs/core
ng g @nrwl/angular:lib --directory=core ui-core
ng g @nrwl/angular:lib --directory=core app-core
ng g @nrwl/angular:lib --project=app-core translations
ng g @nrwl/angular:lib --project=app-core query-params

# CREATING API LIBRARY
ng g @nrwl/angular:lib --directory=api data-api

