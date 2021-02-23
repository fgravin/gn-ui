/**
 * GeoNetwork 4.0.3 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.0.3
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
} from '@angular/common/http'
import { CustomHttpParameterCodec } from '../encoder'
import { Observable } from 'rxjs'

import { PaginatedUserSearchResponseApiModel } from '../model/models'
import { UserSearchDtoApiModel } from '../model/models'

import { BASE_PATH, COLLECTION_FORMATS } from '../variables'
import { Configuration } from '../configuration'

@Injectable({
  providedIn: 'root',
})
export class UsersearchesApiService {
  protected basePath = 'https://apps.titellus.net/geonetwork/srv/api'
  public defaultHeaders = new HttpHeaders()
  public configuration = new Configuration()
  public encoder: HttpParameterCodec

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath
      }
      this.configuration.basePath = basePath
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec()
  }

  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string
  ): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value)
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key)
    }
    return httpParams
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string
  ): HttpParams {
    if (value == null) {
      return httpParams
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        ;(value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key))
        )
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substr(0, 10)
          )
        } else {
          throw Error('key may not be null if value is Date')
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k
            ))
        )
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value)
    } else {
      throw Error('key may not be null if value is not object or array')
    }
    return httpParams
  }

  /**
   * Creates a user search
   * Creates a user search.
   * @param userSearchDtoApiModel User search details
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createUserCustomSearch(
    userSearchDtoApiModel: UserSearchDtoApiModel,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<number>
  public createUserCustomSearch(
    userSearchDtoApiModel: UserSearchDtoApiModel,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<number>>
  public createUserCustomSearch(
    userSearchDtoApiModel: UserSearchDtoApiModel,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<number>>
  public createUserCustomSearch(
    userSearchDtoApiModel: UserSearchDtoApiModel,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (userSearchDtoApiModel === null || userSearchDtoApiModel === undefined) {
      throw new Error(
        'Required parameter userSearchDtoApiModel was null or undefined when calling createUserCustomSearch.'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json']
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.put<number>(
      `${this.configuration.basePath}/usersearches`,
      userSearchDtoApiModel,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Delete a user search
   * Deletes a user search by identifier.
   * @param searchIdentifier Search identifier.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteUserCustomSerach(
    searchIdentifier: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<string>
  public deleteUserCustomSerach(
    searchIdentifier: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<string>>
  public deleteUserCustomSerach(
    searchIdentifier: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<string>>
  public deleteUserCustomSerach(
    searchIdentifier: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (searchIdentifier === null || searchIdentifier === undefined) {
      throw new Error(
        'Required parameter searchIdentifier was null or undefined when calling deleteUserCustomSerach.'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.delete<string>(
      `${this.configuration.basePath}/usersearches/${encodeURIComponent(
        String(searchIdentifier)
      )}`,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Get user custom searches for all users (no paginated)
   * @param featuredType Featured type search.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAllUserCustomSearches(
    featuredType?: 'HOME' | 'EDITOR_BOARD',
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<Array<UserSearchDtoApiModel>>
  public getAllUserCustomSearches(
    featuredType?: 'HOME' | 'EDITOR_BOARD',
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<Array<UserSearchDtoApiModel>>>
  public getAllUserCustomSearches(
    featuredType?: 'HOME' | 'EDITOR_BOARD',
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<Array<UserSearchDtoApiModel>>>
  public getAllUserCustomSearches(
    featuredType?: 'HOME' | 'EDITOR_BOARD',
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (featuredType !== undefined && featuredType !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>featuredType,
        'featuredType'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.get<Array<UserSearchDtoApiModel>>(
      `${this.configuration.basePath}/usersearches/all`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Get user custom searches for all users (paginated)
   * @param featuredType Featured  type search.
   * @param search
   * @param offset From page
   * @param limit Number of records to return
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAllUserCustomSearchesPage(
    featuredType?: 'HOME' | 'EDITOR_BOARD',
    search?: string,
    offset?: number,
    limit?: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<PaginatedUserSearchResponseApiModel>
  public getAllUserCustomSearchesPage(
    featuredType?: 'HOME' | 'EDITOR_BOARD',
    search?: string,
    offset?: number,
    limit?: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<PaginatedUserSearchResponseApiModel>>
  public getAllUserCustomSearchesPage(
    featuredType?: 'HOME' | 'EDITOR_BOARD',
    search?: string,
    offset?: number,
    limit?: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<PaginatedUserSearchResponseApiModel>>
  public getAllUserCustomSearchesPage(
    featuredType?: 'HOME' | 'EDITOR_BOARD',
    search?: string,
    offset?: number,
    limit?: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (featuredType !== undefined && featuredType !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>featuredType,
        'featuredType'
      )
    }
    if (search !== undefined && search !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>search,
        'search'
      )
    }
    if (offset !== undefined && offset !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>offset,
        'offset'
      )
    }
    if (limit !== undefined && limit !== null) {
      queryParameters = this.addToHttpParams(
        queryParameters,
        <any>limit,
        'limit'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.get<PaginatedUserSearchResponseApiModel>(
      `${this.configuration.basePath}/usersearches/allpaginated`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Get featured user custom searches
   * @param type Number of records to return
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getFeaturedUserCustomSearches(
    type?: 'HOME' | 'EDITOR_BOARD',
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<Array<UserSearchDtoApiModel>>
  public getFeaturedUserCustomSearches(
    type?: 'HOME' | 'EDITOR_BOARD',
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<Array<UserSearchDtoApiModel>>>
  public getFeaturedUserCustomSearches(
    type?: 'HOME' | 'EDITOR_BOARD',
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<Array<UserSearchDtoApiModel>>>
  public getFeaturedUserCustomSearches(
    type?: 'HOME' | 'EDITOR_BOARD',
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let queryParameters = new HttpParams({ encoder: this.encoder })
    if (type !== undefined && type !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>type, 'type')
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.get<Array<UserSearchDtoApiModel>>(
      `${this.configuration.basePath}/usersearches/featured`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Get custom search
   * @param searchIdentifier User search identifier
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserCustomSearch(
    searchIdentifier: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<UserSearchDtoApiModel>
  public getUserCustomSearch(
    searchIdentifier: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<UserSearchDtoApiModel>>
  public getUserCustomSearch(
    searchIdentifier: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<UserSearchDtoApiModel>>
  public getUserCustomSearch(
    searchIdentifier: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (searchIdentifier === null || searchIdentifier === undefined) {
      throw new Error(
        'Required parameter searchIdentifier was null or undefined when calling getUserCustomSearch.'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.get<UserSearchDtoApiModel>(
      `${this.configuration.basePath}/usersearches/${encodeURIComponent(
        String(searchIdentifier)
      )}`,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Get user custom searches
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserCustomSearches(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<Array<UserSearchDtoApiModel>>
  public getUserCustomSearches(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<Array<UserSearchDtoApiModel>>>
  public getUserCustomSearches(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<Array<UserSearchDtoApiModel>>>
  public getUserCustomSearches(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.get<Array<UserSearchDtoApiModel>>(
      `${this.configuration.basePath}/usersearches`,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Update a user search
   * @param searchIdentifier User search identifier
   * @param userSearchDtoApiModel User search details
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateCustomUserSearch(
    searchIdentifier: number,
    userSearchDtoApiModel: UserSearchDtoApiModel,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any>
  public updateCustomUserSearch(
    searchIdentifier: number,
    userSearchDtoApiModel: UserSearchDtoApiModel,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpResponse<any>>
  public updateCustomUserSearch(
    searchIdentifier: number,
    userSearchDtoApiModel: UserSearchDtoApiModel,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<HttpEvent<any>>
  public updateCustomUserSearch(
    searchIdentifier: number,
    userSearchDtoApiModel: UserSearchDtoApiModel,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<any> {
    if (searchIdentifier === null || searchIdentifier === undefined) {
      throw new Error(
        'Required parameter searchIdentifier was null or undefined when calling updateCustomUserSearch.'
      )
    }
    if (userSearchDtoApiModel === null || userSearchDtoApiModel === undefined) {
      throw new Error(
        'Required parameter userSearchDtoApiModel was null or undefined when calling updateCustomUserSearch.'
      )
    }

    let headers = this.defaultHeaders

    let httpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(
        httpHeaderAccepts
      )
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json']
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected)
    }

    let responseType: 'text' | 'json' = 'json'
    if (
      httpHeaderAcceptSelected &&
      httpHeaderAcceptSelected.startsWith('text')
    ) {
      responseType = 'text'
    }

    return this.httpClient.put<any>(
      `${this.configuration.basePath}/usersearches/${encodeURIComponent(
        String(searchIdentifier)
      )}`,
      userSearchDtoApiModel,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }
}
