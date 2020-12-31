using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Group
    {
        // 230: the default ctor is given for EF, it needs an empty ctor
        public Group()
        {
        }

        public Group(string name)
        {
            Name = name;
        }

        [Key] // 230: this ensures the Name prop is Unique, it will also index it
        public string Name { get; set; }
        public ICollection<Connection> Connections { get; set; } = new List<Connection>();
    }
}