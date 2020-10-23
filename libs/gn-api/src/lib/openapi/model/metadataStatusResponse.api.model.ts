/**
 * GeoNetwork 4.0.0 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ElementApiModel } from './element.api.model'
import { StatusValueApiModel } from './statusValue.api.model'
import { ISODateApiModel } from './iSODate.api.model'
import { MetadataStatusIdApiModel } from './metadataStatusId.api.model'

export interface MetadataStatusResponseApiModel {
  id?: MetadataStatusIdApiModel
  changeMessage?: string
  statusValue?: StatusValueApiModel
  previousState?: string
  currentState?: string
  authorName?: string
  authorEmail?: string
  authorProfile?: string
  ownerName?: string
  ownerEmail?: string
  ownerProfile?: string
  title?: string
  uuid?: string
  currentStatus?: string
  previousStatus?: string
  currentStatusDetails?: string
  previousStatusDetails?: string
  dueDate?: ISODateApiModel
  closeDate?: ISODateApiModel
  owner?: number
  asXml?: ElementApiModel
}
