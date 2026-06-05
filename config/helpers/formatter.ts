export class Formatter {
  // Método estático para poder llamarlo sin instanciar la clase
  public static currency(value: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
}
