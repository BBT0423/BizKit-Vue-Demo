import authService from "@/Service/authService";
import { HttpStatusCode, type AxiosInstance, type AxiosResponse } from "axios";
import type { Error, Result } from "@/Model/Result";
import { Observable, from, of } from "rxjs";
import { map, catchError, tap, switchMap } from "rxjs/operators";
import type { SalesOrderResource, SalesOrderSearch } from "@/Model/SalesOrder";
import type { PickingSearch } from "@/Model/Picking";
import ErrorService from "./errorService";

const apiUrl = import.meta.env.VITE_API_URL;
const baseURL = `${apiUrl}/v1/salesorder`;

class SalesOrderService {
  private axiosInstance$: Observable<AxiosInstance>;
  private errorService: ErrorService;
  constructor() {
    this.axiosInstance$ = from(authService.getAuthenticatedAxiosInstance());
    this.errorService = new ErrorService();
  }

  private getHttpOptions() {
    return {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      },
    };
  }

  search(endpoint: string): Observable<Result<SalesOrderResource[]>> {
    const url = `${baseURL}/${endpoint}`;
    return this.axiosInstance$.pipe(
      switchMap((axiosInstance) =>
        from(axiosInstance.get<Result<SalesOrderResource[]>>(url, this.getHttpOptions()))
      ),
      map((response: AxiosResponse<Result<SalesOrderResource[]>>) => response.data),
      tap(() => this.errorService.log("Fetched customer list")),
      catchError(this.errorService.handleError<SalesOrderResource[]>("getCustomerList"))
    );
  }

  searchDetail(search: SalesOrderSearch): Observable<Result<SalesOrderResource[]>> {
    const url = `${baseURL}/search`;
    return this.axiosInstance$.pipe(
      switchMap((axiosInstance) =>
        from(axiosInstance.post<Result<SalesOrderResource[]>>(url, search, this.getHttpOptions()))
      ),
      map((response: AxiosResponse<Result<SalesOrderResource[]>>) => response.data),
      tap(() => this.errorService.log("Fetched sales order details")),
      catchError(this.errorService.handleError<SalesOrderResource[]>("searchDetail"))
    );
  }

  get(id: string): Observable<Result<SalesOrderResource>> {
    return this.axiosInstance$.pipe(
      switchMap((axiosInstance) =>
        from(axiosInstance.get<Result<SalesOrderResource>>(`${baseURL}/${id}`, this.getHttpOptions()))
      ),
      map((response: AxiosResponse<Result<SalesOrderResource>>) => response.data),
      tap(() => this.errorService.log(`Fetched sales order with id ${id}`)),
      catchError(this.errorService.handleError<SalesOrderResource>(`get id=${id}`))
    );
  }

  getPikcing(search: PickingSearch): Observable<Result<any>> {
    const url = `${baseURL}/picking/list`;
    return this.axiosInstance$.pipe(
      switchMap((axiosInstance) =>
        from(axiosInstance.post<Result<any>>(url, search, this.getHttpOptions()))
      ),
      map((response: AxiosResponse<Result<any>>) => response.data),
      tap(() => this.errorService.log("Fetched picking list")),
      catchError(this.errorService.handleError<any>("getPikcing"))
    );
  }

  getPickShipHistory(soNo: string): Observable<Result<any>> {
    const url = `${baseURL}/history/${soNo}`;
    return this.axiosInstance$.pipe(
      switchMap((axiosInstance) =>
        from(axiosInstance.get<Result<any>>(url, this.getHttpOptions()))
      ),
      map((response: AxiosResponse<Result<any>>) => response.data),
      tap(() => this.errorService.log(`Fetched pick ship history for SO ${soNo}`)),
      catchError(this.errorService.handleError<any>("getPickShipHistory"))
    );
  }

  
}

export default new SalesOrderService();