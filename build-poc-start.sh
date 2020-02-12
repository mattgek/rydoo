# CREATING SQUAD APPS
ng g @nrwl/angular:application expense
ng g @nrwl/angular:application flight
ng g @nrwl/angular:application identity
ng g @nrwl/angular:application payment-methods
ng g @nrwl/angular:application hotel

# CREATING UI LIBRARY
ng g @nrwl/angular:lib --directory=libs ui-compass
ng g @nrwl/angular:lib --project=ui-compass --export

# CREATING CORE LIBRARY
mkdir libs/core
ng g @nrwl/angular:lib --directory=core ui-core
ng g @nrwl/angular:lib --directory=core app-core
ng g @nrwl/angular:lib --project=app-core translations
ng g @nrwl/angular:lib --project=app-core query-params

# CREATING API LIBRARY
ng g @nrwl/angular:lib --directory=api data-api

# CREATING API LIBRARY
ng g @nrwl/angular:lib --directory=api data-api

