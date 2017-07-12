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

import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AlfrescoApiService } from 'ng2-alfresco-core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SitesService {

    constructor(private apiService: AlfrescoApiService) {
    }

    getSites(opts?: any): any {
        return Observable.fromPromise(this.apiService.getInstance().core.sitesApi.getSites(opts))
            .map(res => this.toJsonArray(res))
            .catch(this.handleError);
    }

    getSite(siteId: string, opts?: any): any {
        return Observable.fromPromise(this.apiService.getInstance().core.sitesApi.getSite(siteId, opts))
            .map(res => res)
            .catch(this.handleError);
    }

    deleteSite(siteId: string, permannent: boolean = true): any {
        return Observable.fromPromise(this.apiService.getInstance().core.sitesApi.deleteSite(siteId, permannent))
            .map(res => res)
            .catch(this.handleError);
    }

    private handleError(error: Response): any {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

    private toJsonArray(res: any) {
        if (res) {
            return res.list.entries || [];
        }
        return [];
    }
}
