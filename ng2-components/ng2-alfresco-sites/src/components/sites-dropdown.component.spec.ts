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

import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdSelectModule } from '@angular/material';
import { AppConfigModule, CoreModule } from 'ng2-alfresco-core';
import { DropdownSitesComponent } from '../components/sites-dropdown.component';
import { SitesService } from '../services/sites.service';

declare let jasmine: any;

let sitesList = {
    'list': {
        'pagination': {
            'count': 2,
            'hasMoreItems': false,
            'totalItems': 2,
            'skipCount': 0,
            'maxItems': 100
        },
        'entries': [
            {
                'entry': {
                    'role': 'SiteManager',
                    'visibility': 'PUBLIC',
                    'guid': 'fe47a4d1-62c1-4338-b814-b410a43421d5',
                    'description': 'giacomo',
                    'id': 'giacomo',
                    'preset': 'site-dashboard',
                    'title': 'giacomo'
                }
            },
            {
                'entry': {
                    'role': 'SiteManager',
                    'visibility': 'PUBLIC',
                    'guid': 'b4cff62a-664d-4d45-9302-98723eac1319',
                    'description': 'This is a Sample Alfresco Team site.',
                    'id': 'swsdp',
                    'preset': 'site-dashboard',
                    'title': 'Sample: Web Site Design Project'
                }
            }
        ]
    }
};

describe('DropdownSitesComponent', () => {

    let component: any;
    let fixture: ComponentFixture<DropdownSitesComponent>;
    let debug: DebugElement;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MdSelectModule,
                CoreModule.forRoot(),
                AppConfigModule.forRoot('app.config.json', {
                    ecmHost: 'http://localhost:9876/ecm'
                })
            ],
            declarations: [
                DropdownSitesComponent
            ],
            providers: [
                SitesService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownSitesComponent);
        debug = fixture.debugElement;
        element = fixture.nativeElement;
        component = fixture.componentInstance;
    });

    describe('Rendering tests', () => {

        beforeEach(() => {
            jasmine.Ajax.install();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it('Dropdown sites should be renedered', () => {
            fixture.detectChanges();
            expect(element.querySelector('#site-dropdown-container')).toBeDefined();
            expect(element.querySelector('#site-dropdown')).toBeDefined();
            expect(element.querySelector('#site-dropdown-container')).not.toBeNull();
            expect(element.querySelector('#site-dropdown')).not.toBeNull();
        });

        fit('Dropdown sites should show a list of sites', (done) => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(element.querySelector('#site-dropdown')).toBeDefined();
                expect(element.querySelector('#giacomo')).toBeDefined();
                done();
            });

            jasmine.Ajax.requests.mostRecent().respondWith({
                status: 200,
                contentType: 'json',
                responseText: sitesList
            });
        });

        it('Add tag', () => {

        });
    });
});
