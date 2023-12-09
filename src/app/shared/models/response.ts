export interface MyResponse {
  data: any;
  current_page?: number;
  last_page?: number;
  next_page_url?: string;
  prev_page_url?: string;
  links?: Link[];

}

export interface Link {
  url?: string | null;
  label: string | null;
  active: boolean;
}
