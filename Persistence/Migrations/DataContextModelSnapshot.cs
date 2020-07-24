﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6");

            modelBuilder.Entity("Domain.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Values");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Value 101"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Value 102"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Value 103"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Value 104"
                        },
                        new
                        {
                            Id = 5,
                            Name = "Value 105"
                        },
                        new
                        {
                            Id = 6,
                            Name = "Value 106"
                        },
                        new
                        {
                            Id = 7,
                            Name = "Value 107"
                        },
                        new
                        {
                            Id = 8,
                            Name = "Value 108"
                        },
                        new
                        {
                            Id = 9,
                            Name = "Value 109"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
