FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-alpine AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-alpine AS build
WORKDIR /src
COPY ["src/Services/Reestr/Reestr.API/Reestr.API.csproj", "src/Services/Reestr/Reestr.API/"]
RUN dotnet restore "src/Services/Reestr/Reestr.API/Reestr.API.csproj"
COPY . .
WORKDIR "/src/src/Services/Reestr/Reestr.API"
RUN dotnet build "Reestr.API.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Reestr.API.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Reestr.API.dll"]