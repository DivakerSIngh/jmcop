using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Jmcop.IGenericRepository
{

    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll { get; }
        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);
        T GetById(int Id);

    }

}
