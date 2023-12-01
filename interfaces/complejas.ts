(() => {
  type IdUuid = `${string}-${string}-${string}-${string}-${string}`;
  interface Client {
    id: IdUuid;
    name: string;
    age: number;
    address: Address;
    // address?: {
    //   id: number;
    //   zip: string;
    //   city: string;
    // };

    getFullAddress?(id: number):string;
  }

  // cuando hay mas propiedades anidadas se recomienda crear una nueva interface
  interface Address {
    id: number;
    zip?: string;
    city: string;
  }

  const client: Client = {
    id: crypto.randomUUID(),
    name: "Renier",
    age: 36,
    address: {
        id: 123,
        zip: '123-abc',
        city: 'Venezuela'
    },
    getFullAddress() {
        // console.log(this.address?.city);
        return this.address.city;
    },
  };

  const client2:Client = {
    id: crypto.randomUUID(),
    name: 'Nancy',
    age: 36,
    address: {
        id: 321,
        zip: 'abc-123',
        city: 'EEUU'
    }
  }
})();
