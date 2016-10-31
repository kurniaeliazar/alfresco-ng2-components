/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import {
    CoreModule
} from 'ng2-alfresco-core';

import { DIAGRAM_DIRECTIVES, DIAGRAM_PROVIDERS } from './index';
import { RAPHAEL_DIRECTIVES, RAPHAEL_PROVIDERS } from './raphael/index';
import { DiagramComponent } from './index';
import { DebugElement } from '@angular/core';
import * as diagramsEventsMock from '../assets/diagramEvents.mock';
import * as diagramsActivitiesMock from '../assets/diagramActivities.mock';

declare let jasmine: any;

describe('Test ng2-activiti-diagrams ', () => {

    let component: any;
    let fixture: ComponentFixture<DiagramComponent>;
    let debug: DebugElement;
    let element: HTMLElement;

    let componentHandler: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CoreModule
            ],
            declarations: [
                ...DIAGRAM_DIRECTIVES,
                ...RAPHAEL_DIRECTIVES
            ],
            providers: [
                ...DIAGRAM_PROVIDERS,
                ...RAPHAEL_PROVIDERS
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DiagramComponent);
        component = fixture.componentInstance;
        debug = fixture.debugElement;
        element = fixture.nativeElement;
        fixture.detectChanges();
        componentHandler = jasmine.createSpyObj('componentHandler', [
            'upgradeAllRegistered'
        ]);
        window['componentHandler'] = componentHandler;
    });

    describe('Diagrams component Events: ', () => {
        beforeEach(() => {
            jasmine.Ajax.install();
            component.processDefinitionId = 'fakeprocess:24:38399';
            component.metricPercentages = {startEvent: 0};
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it('Should render the Start Event', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let event: any = element.querySelector('diagram-start-event > diagram-event > raphael-circle');
                    expect(event).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsEventsMock.startEvent]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Start Timer Event', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).toBeDefined();
                    let event: any = element.querySelector('diagram-start-event > diagram-event > raphael-circle');
                    expect(event).not.toBeNull();

                    let iconEvent: any = element.querySelector('diagram-start-event > diagram-event >' +
                        ' diagram-container-icon-event > div > div > diagram-icon-timer > raphael-icon-timer');
                    expect(iconEvent).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsEventsMock.startTimeEvent]};

            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Start Signal Event', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).toBeDefined();
                    let event: any = element.querySelector('diagram-start-event > diagram-event > raphael-circle');
                    expect(event).not.toBeNull();

                    let iconEvent: any = element.querySelector('diagram-start-event > diagram-event >' +
                        ' diagram-container-icon-event > div > div > diagram-icon-signal > raphael-icon-signal');
                    expect(iconEvent).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsEventsMock.startSignalEvent]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Start Message Event', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).toBeDefined();
                    let event: any = element.querySelector('diagram-start-event > diagram-event > raphael-circle');
                    expect(event).not.toBeNull();

                    let iconEvent: any = element.querySelector('diagram-start-event > diagram-event >' +
                        ' diagram-container-icon-event > div > div > diagram-icon-message > raphael-icon-message');
                    expect(iconEvent).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsEventsMock.startMessageEvent]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Start Error Event', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).toBeDefined();
                    let event: any = element.querySelector('diagram-start-event > diagram-event > raphael-circle');
                    expect(event).not.toBeNull();

                    let iconEvent: any = element.querySelector('diagram-start-event > diagram-event >' +
                        ' diagram-container-icon-event > div > div > diagram-icon-error > raphael-icon-error');
                    expect(iconEvent).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsEventsMock.startErrorEvent]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the End Event', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).toBeDefined();
                    let event: any = element.querySelector('diagram-end-event > diagram-event > raphael-circle');
                    expect(event).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsEventsMock.endEvent]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the End Error Event', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).toBeDefined();
                    let event: any = element.querySelector('diagram-end-event > diagram-event > raphael-circle');
                    expect(event).not.toBeNull();

                    let iconEvent: any = element.querySelector('diagram-end-event > diagram-event >' +
                        ' diagram-container-icon-event > div > div > diagram-icon-error > raphael-icon-error');
                    expect(iconEvent).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsEventsMock.endErrorEvent]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));
    });

    describe('Diagrams component Activities: ', () => {
        beforeEach(() => {
            jasmine.Ajax.install();
            component.processDefinitionId = 'fakeprocess:24:38399';
            component.metricPercentages = {startEvent: 0};
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it('Should render the User Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-user-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-user-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake User task');

                    let iconTask: any = element.querySelector('diagram-user-task > diagram-icon-user-task > raphael-icon-user');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.userTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Manual Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-manual-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-manual-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Manual task');

                    let iconTask: any = element.querySelector('diagram-manual-task > diagram-icon-manual-task > raphael-icon-manual');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.manualTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Service Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-service-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-service-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Service task');

                    let iconTask: any = element.querySelector('diagram-service-task > diagram-icon-service-task > raphael-icon-service');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.serviceTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Service Mail Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(true).toBe(true);
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.mailTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Service Camel Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-camel-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-camel-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Camel task');

                    let iconTask: any = element.querySelector('diagram-camel-task > diagram-icon-camel-task > raphael-icon-camel');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.camelTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Service Mule Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-mule-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-mule-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Mule task');

                    let iconTask: any = element.querySelector('diagram-mule-task > diagram-icon-mule-task > raphael-icon-mule');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.muleTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Service Alfresco Publish Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-alfresco-publish-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-alfresco-publish-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Alfresco Publish task');

                    let iconTask: any = element.querySelector('diagram-alfresco-publish-task > diagram-icon-alfresco-publish-task >' +
                        ' raphael-icon-alfresco-publish');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.alfrescoPublishTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Service Google Drive Publish Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-google-drive-publish-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-google-drive-publish-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Google Drive Publish task');

                    let iconTask: any = element.querySelector('diagram-google-drive-publish-task >' +
                        ' diagram-icon-google-drive-publish-task > raphael-icon-google-drive-publish');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.googleDrivePublishTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Rest Call Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-rest-call-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-rest-call-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Rest Call task');

                    let iconTask: any = element.querySelector('diagram-rest-call-task > diagram-icon-rest-call-task >' +
                        ' raphael-icon-rest-call');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.restCallTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Service Box Publish Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-box-publish-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-box-publish-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Box Publish task');

                    let iconTask: any = element.querySelector('diagram-box-publish-task >' +
                        ' diagram-icon-box-publish-task > raphael-icon-box-publish');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.boxPublishTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Receive Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-receive-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-receive-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Receive task');

                    let iconTask: any = element.querySelector('diagram-receive-task > diagram-icon-receive-task > raphael-icon-receive');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.receiveTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Script Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-script-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-script-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake Script task');

                    let iconTask: any = element.querySelector('diagram-script-task > diagram-icon-script-task > raphael-icon-script');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.scriptTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

        it('Should render the Business Rule Task', async(() => {
            component.onSuccess.subscribe((res) => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(res).not.toBeNull();
                    let task: any = element.querySelector('diagram-business-rule-task > diagram-task > raphael-rect');
                    expect(task).not.toBeNull();

                    let taskText: any = element.querySelector('diagram-business-rule-task > diagram-task > raphael-text');
                    expect(taskText).not.toBeNull();
                    expect(taskText.attributes[1].value).toEqual('Fake BusinessRule task');

                    let iconTask: any = element.querySelector('diagram-business-rule-task > diagram-icon-business-rule-task > raphael-icon-business-rule');
                    expect(iconTask).not.toBeNull();
                });
            });
            component.ngOnChanges();
            let resp = {elements: [diagramsActivitiesMock.businessRuleTask]};
            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: resp
            });
        }));

    });
});
