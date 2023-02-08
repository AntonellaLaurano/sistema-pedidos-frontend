export interface Order {
    Table_ID:       string;
    order_Produdct: OrderProdudct[];
    status:         boolean;
    id:             string;
}

export interface OrderProdudct {
    category_id: number;
    description: string;
    name:        string;
    price:       number;
    id:          number;
    category:    string;
}