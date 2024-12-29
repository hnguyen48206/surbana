'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">surbana documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-b8b08da4c56fa123fbba89ceddc6427a87f9dcc6351434a1bfb7c9f231df50883d550ad2c8ee2f96225a04cc0cd6fe7dbac76ecac89f0650f259be36bfad9bd9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-b8b08da4c56fa123fbba89ceddc6427a87f9dcc6351434a1bfb7c9f231df50883d550ad2c8ee2f96225a04cc0cd6fe7dbac76ecac89f0650f259be36bfad9bd9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b8b08da4c56fa123fbba89ceddc6427a87f9dcc6351434a1bfb7c9f231df50883d550ad2c8ee2f96225a04cc0cd6fe7dbac76ecac89f0650f259be36bfad9bd9"' :
                                            'id="xs-controllers-links-module-AppModule-b8b08da4c56fa123fbba89ceddc6427a87f9dcc6351434a1bfb7c9f231df50883d550ad2c8ee2f96225a04cc0cd6fe7dbac76ecac89f0650f259be36bfad9bd9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-b8b08da4c56fa123fbba89ceddc6427a87f9dcc6351434a1bfb7c9f231df50883d550ad2c8ee2f96225a04cc0cd6fe7dbac76ecac89f0650f259be36bfad9bd9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-b8b08da4c56fa123fbba89ceddc6427a87f9dcc6351434a1bfb7c9f231df50883d550ad2c8ee2f96225a04cc0cd6fe7dbac76ecac89f0650f259be36bfad9bd9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b8b08da4c56fa123fbba89ceddc6427a87f9dcc6351434a1bfb7c9f231df50883d550ad2c8ee2f96225a04cc0cd6fe7dbac76ecac89f0650f259be36bfad9bd9"' :
                                        'id="xs-injectables-links-module-AppModule-b8b08da4c56fa123fbba89ceddc6427a87f9dcc6351434a1bfb7c9f231df50883d550ad2c8ee2f96225a04cc0cd6fe7dbac76ecac89f0650f259be36bfad9bd9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BuildingModule.html" data-type="entity-link" >BuildingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BuildingModule-34ee4f537e545393db9cd2cef6bd66fa62287dd8b1dca71d75b8d6084deda91cda7cb679e324a70765c61eddca7231b72898887080075210798edb447a79d8e2"' : 'data-bs-target="#xs-controllers-links-module-BuildingModule-34ee4f537e545393db9cd2cef6bd66fa62287dd8b1dca71d75b8d6084deda91cda7cb679e324a70765c61eddca7231b72898887080075210798edb447a79d8e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BuildingModule-34ee4f537e545393db9cd2cef6bd66fa62287dd8b1dca71d75b8d6084deda91cda7cb679e324a70765c61eddca7231b72898887080075210798edb447a79d8e2"' :
                                            'id="xs-controllers-links-module-BuildingModule-34ee4f537e545393db9cd2cef6bd66fa62287dd8b1dca71d75b8d6084deda91cda7cb679e324a70765c61eddca7231b72898887080075210798edb447a79d8e2"' }>
                                            <li class="link">
                                                <a href="controllers/BuildingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuildingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BuildingModule-34ee4f537e545393db9cd2cef6bd66fa62287dd8b1dca71d75b8d6084deda91cda7cb679e324a70765c61eddca7231b72898887080075210798edb447a79d8e2"' : 'data-bs-target="#xs-injectables-links-module-BuildingModule-34ee4f537e545393db9cd2cef6bd66fa62287dd8b1dca71d75b8d6084deda91cda7cb679e324a70765c61eddca7231b72898887080075210798edb447a79d8e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BuildingModule-34ee4f537e545393db9cd2cef6bd66fa62287dd8b1dca71d75b8d6084deda91cda7cb679e324a70765c61eddca7231b72898887080075210798edb447a79d8e2"' :
                                        'id="xs-injectables-links-module-BuildingModule-34ee4f537e545393db9cd2cef6bd66fa62287dd8b1dca71d75b8d6084deda91cda7cb679e324a70765c61eddca7231b72898887080075210798edb447a79d8e2"' }>
                                        <li class="link">
                                            <a href="injectables/BuildingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuildingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocationModule.html" data-type="entity-link" >LocationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LocationModule-2de0a6126b1378f916689b227ca398b9ae9f043042f3e60df1f747661cda84f1e379553482587a72be278a0c3f29c67ac01370087be0ec923346021cc7604e9e"' : 'data-bs-target="#xs-controllers-links-module-LocationModule-2de0a6126b1378f916689b227ca398b9ae9f043042f3e60df1f747661cda84f1e379553482587a72be278a0c3f29c67ac01370087be0ec923346021cc7604e9e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LocationModule-2de0a6126b1378f916689b227ca398b9ae9f043042f3e60df1f747661cda84f1e379553482587a72be278a0c3f29c67ac01370087be0ec923346021cc7604e9e"' :
                                            'id="xs-controllers-links-module-LocationModule-2de0a6126b1378f916689b227ca398b9ae9f043042f3e60df1f747661cda84f1e379553482587a72be278a0c3f29c67ac01370087be0ec923346021cc7604e9e"' }>
                                            <li class="link">
                                                <a href="controllers/LocationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LocationModule-2de0a6126b1378f916689b227ca398b9ae9f043042f3e60df1f747661cda84f1e379553482587a72be278a0c3f29c67ac01370087be0ec923346021cc7604e9e"' : 'data-bs-target="#xs-injectables-links-module-LocationModule-2de0a6126b1378f916689b227ca398b9ae9f043042f3e60df1f747661cda84f1e379553482587a72be278a0c3f29c67ac01370087be0ec923346021cc7604e9e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LocationModule-2de0a6126b1378f916689b227ca398b9ae9f043042f3e60df1f747661cda84f1e379553482587a72be278a0c3f29c67ac01370087be0ec923346021cc7604e9e"' :
                                        'id="xs-injectables-links-module-LocationModule-2de0a6126b1378f916689b227ca398b9ae9f043042f3e60df1f747661cda84f1e379553482587a72be278a0c3f29c67ac01370087be0ec923346021cc7604e9e"' }>
                                        <li class="link">
                                            <a href="injectables/LocationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LoggerModule-d10d745f06c31e9b53bdbffdfc07cb8977aee9b82c1a82007563f202d9148a3a899f04e11d1146b79d1cbe87a23df40580730f1f28d89b30e4f989dc7d3fcc9e"' : 'data-bs-target="#xs-injectables-links-module-LoggerModule-d10d745f06c31e9b53bdbffdfc07cb8977aee9b82c1a82007563f202d9148a3a899f04e11d1146b79d1cbe87a23df40580730f1f28d89b30e4f989dc7d3fcc9e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-d10d745f06c31e9b53bdbffdfc07cb8977aee9b82c1a82007563f202d9148a3a899f04e11d1146b79d1cbe87a23df40580730f1f28d89b30e4f989dc7d3fcc9e"' :
                                        'id="xs-injectables-links-module-LoggerModule-d10d745f06c31e9b53bdbffdfc07cb8977aee9b82c1a82007563f202d9148a3a899f04e11d1146b79d1cbe87a23df40580730f1f28d89b30e4f989dc7d3fcc9e"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BuildingController.html" data-type="entity-link" >BuildingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LocationController.html" data-type="entity-link" >LocationController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Building.html" data-type="entity-link" >Building</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Location.html" data-type="entity-link" >Location</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBuildingDto.html" data-type="entity-link" >CreateBuildingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLocationDto.html" data-type="entity-link" >CreateLocationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBuildingDto.html" data-type="entity-link" >UpdateBuildingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLocationDto.html" data-type="entity-link" >UpdateLocationDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BuildingService.html" data-type="entity-link" >BuildingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocationService.html" data-type="entity-link" >LocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link" >LoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});