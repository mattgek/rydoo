# CREATING SQUAD APPS
ng g @nrwl/angular:application expense --style=scss --routing
ng g @nrwl/angular:application flight --style=scss --routing
ng g @nrwl/angular:application identity --style=scss --routing
ng g @nrwl/angular:application payment-methods --style=scss --routing
ng g @nrwl/angular:application hotel --style=scss --routing

# CREATING FEATURE GROUPING
mkdir libs/features
ng g @nrwl/angular:lib --directory=features shell --routing=false --parentModule=apps/gyroscope/src/app/app.module.ts
ng g @nrwl/angular:lib --directory=features dashboard --routing --parentModule=apps/gyroscope/src/app/app.module.ts --lazy
ng g @nrwl/angular:lib --directory=features flights --routing --parentModule=apps/gyroscope/src/app/app.module.ts --lazy
ng g @nrwl/angular:lib --directory=features payment-methods --routing --parentModule=apps/gyroscope/src/app/app.module.ts --lazy

# CREATING UI LIBRARY
mkdir libs/ui
ng g @nrwl/angular:lib --directory=ui compass
ng g @nrwl/angular:component table --project=ui-compass --export
ng g @nrwl/angular:component address-form --project=ui-compass --export


# CREATING CORE LIBRARY
mkdir libs/shared
ng g @nrwl/angular:lib --directory=shared ui-core
ng g @nrwl/angular:lib --directory=shared app-core

# CREATING API LIBRARY
mkdir libs/data-access
ng g @nrwl/angular:lib --directory=data-access api

# CREATING MATERIAL SCHEMATIC COMPONENTS
ng generate @angular/material:navigation shell
ng generate @angular/material:dashboard dasboard




