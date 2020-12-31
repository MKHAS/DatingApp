namespace API.Entities
{
    public class Connection
    {
        public Connection()
        {
        }

        public Connection(string connectionId, string username)
        {
            ConnectionId = connectionId;
            Username = username;
        }

        // 230: by convention if we include Id in the name of the prop, EF will consider it a PK
        public string ConnectionId { get; set; }
        public string Username { get; set; }
    }
}