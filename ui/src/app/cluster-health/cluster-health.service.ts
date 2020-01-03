import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ClusterHealth} from './cluster-health';
import {HttpClient} from '@angular/common/http';
import {ClusterHealthHistory} from './cluster-health-history';

@Injectable({
  providedIn: 'root'
})
export class ClusterHealthService {
  baseUrl = '/api/v1/cluster/';

  constructor(private http: HttpClient) {
  }

  listClusterHealth(project_name: string, namespace: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + project_name + '/health/' + namespace + '/');
  }

  listNamespace(project_name: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + project_name + '/namespace/');
  }

  listComponent(project_name: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + project_name + '/component/');
  }

}
