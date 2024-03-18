export class MenuResponse {
  id: string;
  name: string;
  description: string;
  icon: string;
  subMenu?: MenuResponse[];
}
