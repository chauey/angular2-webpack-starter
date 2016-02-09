using System.Collections.Generic;

namespace aa.mvp.Models
{
    public class Shipment
    {
        public int Id { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }

        public static List<Shipment> Create()
        {
            return new List<Shipment>
            {
                new Shipment
                {
                    Id = 123,
                    Destination = "Norrköping",
                    Origin = "Linköping"
                },
                new Shipment
                {
                    Id = 343,
                    Destination = "Stockholm",
                    Origin = "Göteborg"
                }
            };
        }
    }
}