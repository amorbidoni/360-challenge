export interface CollectionsReportResult {
    account_id:string,
    report_date:Date,
    total_collected:number,
    total_gross_fee:number,
    total_net_amount:number,
    data:CollectionsReportItemResult[]
}

export interface CollectionsReportItemResult {
    informed_date:Date,
    request_id:number,
    description:string,
    external_reference:string,
    payer_name:string,
    channel:string,
    amount_paid:number,
    net_fee:number,
    iva_fee:number,
    net_amount:number,
    available_at:Date
}
