
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentInteractionComponent } from './components/components-section/component-interaction/component-interaction.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplatesComponent } from './templates/templates.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LifecycleHooksComponent } from './components/components-section/lifecycle-hooks/lifecycle-hooks.component';
import { ParentComponent } from './components/components-section/lifecycle/parent/parent.component';
import { ChildComponent } from './components/components-section/lifecycle/child/child.component';
import { HeroChildComponent } from './components/components-section/interaction/hero-child/hero-child.component';
import { HeroParentComponent } from './components/components-section/interaction/hero-parent/hero-parent.component';
import { NameChildComponent } from './components/components-section/interaction/name-child/name-child.component';
import { NameParentComponent } from './components/components-section/interaction/name-parent/name-parent.component';
import { VersionChildComponent } from './components/components-section/interaction/version-child/version-child.component';
import { VersionParentComponent } from './components/components-section/interaction/version-parent/version-parent.component';
import { VoterComponent } from './components/components-section/interaction/voter/voter.component';
import { VotetakerComponent } from './components/components-section/interaction/votetaker/votetaker.component';
import { CountdownTimerComponent } from './components/components-section/interaction/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './components/components-section/interaction/countdown-parent/countdown-parent.component';
import { SharingDataComponent } from './components/components-section/sharing-data/sharing-data.component';
import { ItemDetailComponent } from './components/components-section/sharing/item-detail/item-detail.component';
import { SizerComponent } from './templates/templates-section/sizer/sizer.component';
import { SizerParentComponent } from './templates/templates-section/sizer-parent/sizer-parent.component';
import { JsTutorialComponent } from './javascript/js-tutorial/js-tutorial.component';
import { ArrayTutorialComponent } from './javascript/js-section/array-tutorial/array-tutorial.component';
import { ObjectTutorialComponent } from './javascript/js-section/object-tutorial/object-tutorial.component';
import { PromiseTutorialComponent } from './javascript/js-section/promise-tutorial/promise-tutorial.component';
import { httpInterceptorProviders } from './http/http-client-tutorial/http-interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        ComponentsComponent,
        DirectivesComponent,
        TemplatesComponent,
        PageNotFoundComponent,
        LifecycleHooksComponent,
        ParentComponent,
        ChildComponent,
        ComponentInteractionComponent,
        HeroChildComponent,
        HeroParentComponent,
        NameChildComponent,
        NameParentComponent,
        VersionChildComponent,
        VersionParentComponent,
        VoterComponent,
        VotetakerComponent,
        CountdownTimerComponent,
        CountdownParentComponent,
        SharingDataComponent,
        ItemDetailComponent,
        SizerComponent,
        SizerParentComponent,
        JsTutorialComponent,
        ArrayTutorialComponent,
        ObjectTutorialComponent,
        PromiseTutorialComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
    providers: [
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
