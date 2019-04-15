using Jmcop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace Jmcop.IGenericRepository
{
  
    public interface IUserRepository<T>
    {
        void Add(T obj);
        T Get(string key);
        List<T> GetAll(string key);
        void Update(T obj);
        void Delete(string key);
    }
}
